import CameraAltIcon from '@mui/icons-material/CameraAlt'
import { Box, IconButton, Modal, Typography } from '@mui/material'
import { useDropzone, FileWithPath, FileRejection } from 'react-dropzone'
import { useEffect, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import { ErrorText } from '../../constants/error'

const FileUpload = () => {
  const [files, setFiles] = useState<FileWithPath[]>([])
  const [rejectFileList, setRejectFileList] = useState<FileRejection[]>([])

  /**
   * 파일 업로드 에러 핸들링
   */
  const handleUploadError = (fileRejections: FileRejection[]) => {
    if (fileRejections.length > 5) {
      alert('5개 이상 업로드 할 수 없습니다.')
    } else {
      setRejectFileList(fileRejections)
    }
  }

  /**
   * 파일 업로드 핸들링
   */
  const onDrop = (
    uploadedFiles: FileWithPath[],
    fileRejections: FileRejection[],
  ) => {
    if (fileRejections.length) {
      handleUploadError(fileRejections)
      return
    }
    const newFiles = [...files, ...uploadedFiles].slice(0, 5)
    setFiles(newFiles)
  }

  /**
   * react-dropzone
   */
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/jpg': [],
      'image/jpeg': [],
      'image/png': [],
    },
    maxFiles: 5,
    multiple: true,
  })

  const deleteFile = (index: number) => {
    const _list = files.filter((_, idx) => idx !== index)
    setFiles(_list)
  }

  useEffect(() => {
    // 메모리 누수를 방지하기 위해 unmount 될 때 데이터 URI 폐기
    return () =>
      files.forEach((file) => URL.revokeObjectURL(URL.createObjectURL(file)))
  }, [])

  return (
    <>
      <Box sx={{ pt: 2 }}>
        <div {...getRootProps()} className="dnd-wrapper">
          <input {...getInputProps()} />
          {isDragActive ? (
            <div className="loading">
              <Typography variant="h6">여기에 파일을 드롭하세요.</Typography>
            </div>
          ) : (
            <div className="upload-wrapper">
              <div className="upload-btn">
                <CameraAltIcon color="primary" aria-label="upload picture" />
              </div>
              {!!files.length && (
                <ul className="preview-list">
                  {files.map((file, index) => (
                    <li key={index}>
                      <div className="img-wrapper">
                        <img
                          key={file.name}
                          src={URL.createObjectURL(file)}
                          alt={file.name}
                          width="100"
                        />
                      </div>
                      <IconButton
                        aria-label="delete"
                        onClick={(e) => {
                          deleteFile(index)
                          e.stopPropagation()
                        }}
                      >
                        <CloseIcon />
                      </IconButton>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      </Box>
      {!!rejectFileList.length && (
        <Modal
          open={!!rejectFileList.length}
          onClose={() => setRejectFileList([])}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className="modal-content">
            <p>
              업로드에 실패했습니다.
              <br />
              아래 내용을 확인해주세요.
            </p>
            <ul className="reject-list">
              {rejectFileList.map(({ file, errors }) => {
                return (
                  <li key={file.name}>
                    {file.name}
                    <ul>
                      {errors.map((e) => (
                        <li key={e.code}>{ErrorText[e.code]}</li>
                      ))}
                    </ul>
                  </li>
                )
              })}
            </ul>
          </Box>
        </Modal>
      )}
    </>
  )
}

export default FileUpload

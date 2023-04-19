import { Box } from '@mui/material'
import { Editor } from '@tinymce/tinymce-react'
import { useRecoilState } from 'recoil'
import { contentsState } from '../../recoil/atoms/review'

export const tinymce_editor_key =
  'o7wxbs5q1pv98uixmmzseqi02dao4v7k8c3056kw8v6z7enw'

const ReviewContents = () => {
  const [content, setContent] = useRecoilState(contentsState)

  return (
    <Box sx={{ pt: 2 }}>
      <Editor
        id="tinyEditor"
        apiKey={tinymce_editor_key}
        init={{
          plugins:
            'anchor autolink charmap codesample emoticons link lists searchreplace visualblocks wordcount',
          toolbar:
            'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
          tinycomments_mode: 'embedded',
          tinycomments_author: 'Author name',
          mergetags_list: [
            { value: 'First.Name', title: 'First Name' },
            { value: 'Email', title: 'Email' },
          ],
        }}
        value={content}
        onEditorChange={(text: string) => setContent(text)}
      />
    </Box>
  )
}

export default ReviewContents

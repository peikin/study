import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import { useRecoilState } from 'recoil'
import { businessState } from '../../recoil/atoms/review'

export type BusinessItem = {
  label: string
  value: string
}

const businessList: BusinessItem[] = [
  { label: '삼양식품', value: 'SamyangFoods' },
  { label: '롯데제과', value: 'LotteConfectionery' },
  { label: '오뚜기', value: 'Ottogi' },
  { label: 'CJ제일제당', value: 'CJCheilJedang' },
  { label: '농심', value: 'Nongshim' },
  { label: 'GS리테일', value: 'GSRetail' },
  { label: '아웃백스테이크하우스', value: 'OutbackSteakhouse' },
  { label: '해태제과', value: 'HaitaiConfectionery' },
]

const BusinessSelect = () => {
  const [business, setBusiness] = useRecoilState(businessState)

  return (
    <Autocomplete
      id="business-select"
      className="business-select"
      disablePortal
      options={businessList}
      getOptionLabel={(option) => option.label}
      value={business}
      onChange={(event, newValue) => {
        setBusiness(newValue)
      }}
      isOptionEqualToValue={(option, selected) =>
        option.value === selected.value
      }
      renderInput={(params) => <TextField {...params} label="기업" required />}
    />
  )
}

export default BusinessSelect

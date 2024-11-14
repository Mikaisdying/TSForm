import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);

const initialData = [
  {
    id: 56815465,
    name: 'Chu Văn An',
    age: 30,
    address: '123 Phố Huế, Hai Bà Trưng, Hà Nội',
    dob: dayjs('2013-02-10').format('DD-MM-YYYY'),
    reason: 'Bệnh nặng',
  },
  {
    id: 56815466,
    name: 'Mạch Kiều Anh',
    age: 25,
    address: '456 Phố Bà Triệu, Hai Bà Trưng, Hà Nội',
    reason: 'Cảm cúm',
  },
  {
    id: 56815467,
    name: 'Phùng Trần Annh Vũ',
    age: 28,
    address: '789 Đường Láng, Đống Đa, Hà Nội',
    reason: 'Tai nạn',
  },
];

console.log(initialData);

export default initialData;

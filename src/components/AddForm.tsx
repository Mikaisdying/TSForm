import { useState } from 'react';
import { Modal, DatePicker, message } from 'antd';
import { useDispatch } from 'react-redux';
import { addPerson } from '../store';
import dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';
import { CustomButton } from './CustomButton';
import { CustomInput } from './CustomInput';

interface FormData {
  name: string;
  age: string;
  address: string;
  reason: string;
  dob: string | null;
}

interface AddFormProps {
  visible: boolean;
  onClose: () => void;
}

export default function AddForm({
  visible,
  onClose,
}: AddFormProps): JSX.Element {
  const dispatch = useDispatch();
  const [form, setForm] = useState<FormData>({
    name: '',
    age: '',
    address: '',
    reason: '',
    dob: null,
  });

  const handleAdd = (): void => {
    const { name, age, address: _address, reason, dob: _dob } = form;

    if (!name || !reason) {
      message.error('Trả lời zùm.');
      return;
    }

    if (age !== '') {
      const ageValue = parseInt(age, 10);
      if (isNaN(ageValue) || ageValue < 0 || ageValue > 1000) {
        message.error('Tuổi phải là một số. M pi tuổi à?');
        return;
      }
    }

    dispatch(addPerson(form));
    onClose();
    setForm({
      name: '',
      age: '',
      address: '',
      reason: '',
      dob: null,
    });
  };

  return (
    <Modal
      open={visible}
      title="Báo cáo tử vong"
      onCancel={onClose}
      footer={null}
    >
      <CustomInput
        label="Tên"
        required
        value={form.name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setForm({ ...form, name: e.target.value })
        }
      />
      <CustomInput
        label="Tuổi"
        value={form.age}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setForm({ ...form, age: e.target.value })
        }
      />
      <div className="mb-1">
        <label className="block mb-1">Ngày mất</label>
        <DatePicker
          onChange={(date: Dayjs | null) =>
            setForm({
              ...form,
              dob: date ? dayjs(date).format('DD-MM-YYYY') : null,
            })
          }
          value={form.dob ? dayjs(form.dob, 'DD-MM-YYYY') : null}
        />
      </div>
      <CustomInput
        label="Địa chỉ đăng ký"
        value={form.address}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setForm({ ...form, address: e.target.value })
        }
      />
      <CustomInput
        label="Nguyên nhân tử vong"
        required
        value={form.reason}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setForm({ ...form, reason: e.target.value })
        }
      />
      <CustomButton onClick={handleAdd} className="pt-1">
        Cập nhật
      </CustomButton>
    </Modal>
  );
}

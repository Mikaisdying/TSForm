import { useEffect, useState } from 'react';
import { Modal, DatePicker, message, Button } from 'antd';
import { useDispatch } from 'react-redux';
import { editPerson, removePerson } from '../store';
import dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';
import { CustomButton } from './CustomButton';
import { CustomInput } from './CustomInput';

interface FormData {
  name: string;
  age?: number;
  address?: string;
  dob?: string;
  reason: string;
}

interface Person extends FormData {
  id: string;
}

interface EditFormProps {
  selectedPerson: Person;
  visible: boolean;
  onClose: () => void;
}

const EditForm: React.FC<EditFormProps> = ({
  selectedPerson,
  visible,
  onClose,
}) => {
  const dispatch = useDispatch();

  const [form, setForm] = useState<FormData>({
    name: '',
    age: undefined,
    address: '',
    reason: '',
    dob: undefined,
  });

  useEffect(() => {
    if (selectedPerson) {
      setForm({
        name: selectedPerson.name,
        age: selectedPerson.age,
        address: selectedPerson.address,
        reason: selectedPerson.reason,
        dob: selectedPerson.dob,
      });
    }
  }, [selectedPerson]);

  const handleEdit = (): void => {
    const {
      name: _name,
      age,
      address: _address,
      reason: _reason,
      dob: _dob,
    } = form;

    if (age !== undefined) {
      if (isNaN(age) || age < 0 || age > 1000) {
        message.error('Tuổi phải là một số. M pi tuổi à?');
        return;
      }
    }

    dispatch(
      editPerson({
        ...form,
        id: selectedPerson.id,
      })
    );
    message.success('Thông tin đã được cập nhật.');
    onClose();
    setForm({
      name: '',
      age: undefined,
      address: '',
      reason: '',
      dob: undefined,
    });
  };

  const handleRemove = (): void => {
    dispatch(
      removePerson({
        id: selectedPerson.id,
      })
    );
    message.success('Dữ liệu đã được xóa.');
    onClose();
  };

  return (
    <Modal
      title="Chỉnh sửa thông tin"
      open={visible}
      onCancel={onClose}
      footer={null}
    >
      <CustomInput
        label="Tên"
        required
        placeholder={form.name ? form.name : 'Nhập tên...'}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setForm({ ...form, name: e.target.value })
        }
        value={form.name}
      />
      <CustomInput
        label="Tuổi"
        placeholder={selectedPerson ? `${selectedPerson.age}` : 'Nhập tuổi...'}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setForm({
            ...form,
            age: e.target.value ? Number(e.target.value) : undefined,
          })
        }
        type="number"
        value={form.age ? `${form.age}` : ''}
      />
      <div className="mb-1">
        <label className="block mb-1">Ngày mất</label>
        <DatePicker
          onChange={(date: Dayjs | null) =>
            setForm({
              ...form,
              dob: date ? date.format('DD-MM-YYYY') : undefined,
            })
          }
          value={form.dob ? dayjs(form.dob, 'DD-MM-YYYY') : null}
        />
      </div>
      <CustomInput
        label="Địa chỉ"
        placeholder={
          selectedPerson ? selectedPerson.address : 'Nhập địa chỉ...'
        }
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setForm({ ...form, address: e.target.value })
        }
        value={form.address}
      />
      <CustomInput
        label="Nguyên nhân tử vong"
        required
        placeholder={selectedPerson ? selectedPerson.reason : 'Nhập lý do...'}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setForm({ ...form, reason: e.target.value })
        }
        value={form.reason}
      />
      <CustomButton type="primary" onClick={handleEdit} className="pt-1">
        Cập nhật lại
      </CustomButton>
      <Button
        color="danger"
        variant="text"
        className="inline-flex justify-center w-full"
        onClick={handleRemove}
      >
        Xóa dữ liệu
      </Button>
    </Modal>
  );
};

export default EditForm;

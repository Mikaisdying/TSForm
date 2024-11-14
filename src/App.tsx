import React, { useRef, useState } from 'react';
import { Modal, Table, Button, Input, Space, InputRef } from 'antd';
const { Search } = Input;
import { SearchOutlined, CheckOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import type { ColumnsType, ColumnType } from 'antd/es/table';
import Highlighter from 'react-highlight-words';
import AddForm from './components/AddForm';
import EditForm from './components/EditForm';
import Map from './components/Map';
import dayjs from 'dayjs';

import { FaPen, FaPlusCircle } from 'react-icons/fa';
import { MdPinDrop } from 'react-icons/md';
import queryString from 'query-string';
import { useDebounce } from "@uidotdev/usehooks";

interface Person {
  id: string;
  name: string;
  age?: number;
  address?: string;
  dob?: string;
  reason: string;
}

interface RootState {
  data: {
    data: Person[];
  };
}

const App: React.FC = () => {
  const data = useSelector((state: RootState) => state.data.data || []);
  const [addModalVisible, setAddModalVisible] = useState<boolean>(false);
  const [editModalVisible, setEditModalVisible] = useState<boolean>(false);
  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);
  const [mapModalVisible, setMapModalVisible] = useState<boolean>(false);
  const [selectedAddress, setSelectedAddress] = useState<string>('');

  const handleEditClick = (person: Person): void => {
    setSelectedPerson(person);
    setEditModalVisible(true);
  };

  const handleAddressClick = (address: string): void => {
    setSelectedAddress(address);
    setMapModalVisible(true);
  };

  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef<InputRef>(null);

  const handleSearch = (selectedKeys: string[], confirm: () => void, dataIndex: keyof Person) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters: () => void) => {
    clearFilters();
    setSearchText('');
    setSearchedColumn('');
  };

  const getColumnSearchProps = (dataIndex: keyof Person): ColumnType<Person> => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
          style={{ marginBottom: 8, display: 'block' }}
          id={`search-${dataIndex}`}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button onClick={() => clearFilters && handleReset(clearFilters)} size="small" style={{ width: 90 }}>
            Reset
          </Button>
        </Space>
      </div>
    ),
    onFilter: (value, record) =>
      record[dataIndex]?.toString().toLowerCase().includes((value as string).toLowerCase()) ?? false,
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text: string) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });
  
  const debouncedSearchText = useDebounce(searchText, 3000);
  const handleSearchQuery = (value: string) => {
    setSearchText(value);
  };

  const [showCheck, setShowCheck] = useState<boolean>(false);

  React.useEffect(() => {
    const query = queryString.stringify({ search: debouncedSearchText });
    window.history.pushState(null, '', `?${query}`);
    setSearchedColumn('name');
    setShowCheck(true);
    const timer = setTimeout(() => setShowCheck(false), 2000);
    return () => clearTimeout(timer);
  }, [debouncedSearchText]);

  const columns: ColumnsType<Person> = [
    {
      title: 'Tên',
      dataIndex: 'name',
      showSorterTooltip: {
        target: 'full-header',
      },
      key: 'name',
      filterSearch: true,
      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ['descend'],
      ...getColumnSearchProps('name'),
    },
    {
      title: 'Tuổi',
      dataIndex: 'age',
      key: 'age',
      defaultSortOrder: 'descend',
      sorter: (a, b) => (a.age ?? 0) - (b.age ?? 0),
    },
    {
      title: 'Địa chỉ',
      dataIndex: 'address',
      key: 'address',
      render: (address?: string) => (
        <span>
          {address}{' '}
          {address && <MdPinDrop onClick={() => handleAddressClick(address)} />}
        </span>
      ),
    },
    {
      title: 'Ngày mất',
      dataIndex: 'dob',
      key: 'dob',
      render: (dob?: string) => dob && dayjs(dob).format('DD-MM-YYYY'),
    },
    {
      title: 'Nguyên nhân tử vong',
      dataIndex: 'reason',
      key: 'reason',
      filterSearch: true,
      ...getColumnSearchProps('address'),
    },
    {
      title: '',
      key: 'edit',
      render: (_, record: Person) => (
        <Button onClick={() => handleEditClick(record)}>
          <FaPen />
        </Button>
      ),
    },
  ];

  return (
      <div className="p-20">
        <div className="mb-2.5 flex justify-between">
          <Search
            placeholder="input query text"
            onChange={(e) => handleSearchQuery(e.target.value)}
            style={{
              width: 200,
            }}
            id="search-query"
          />
          {showCheck && <CheckOutlined style={{ color: 'green', marginLeft: 8 }} />}
          <Button className="ml-auto" onClick={() => setAddModalVisible(true)}>
            <FaPlusCircle /> Thêm
          </Button>
        </div>

        <Table<Person>
          dataSource={data}
          columns={columns}
          pagination={{ pageSize: 5 }}
          rowKey="id"
        />

        <AddForm
          visible={addModalVisible}
          onClose={() => setAddModalVisible(false)}
        />
        {editModalVisible && selectedPerson && (
          <EditForm
            selectedPerson={selectedPerson}
            visible={editModalVisible}
            onClose={() => {
              setEditModalVisible(false);
              setSelectedPerson(null);
            }}
          />
        )}
        <Modal
          title={selectedAddress}
          open={mapModalVisible}
          onCancel={() => setMapModalVisible(false)}
          footer={null}
        >
          <Map address={selectedAddress} /* visible={mapModalVisible} */ />
        </Modal>
      </div>
  );
};

export default App;

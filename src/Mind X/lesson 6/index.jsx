import { useState } from 'react';
import Input from './input';
// import './App.css';
/**
 *
 * Thay vì tư tưởng lấy giá trị từ ô input
 *
 *
 * -> Lấy dữ liệu  để đưa cho thẻ input hiển thị
 * Chính vì ô input lấy giá trị (dữ liệu) từ component, cho nên nó không có khả năng tự thay đổi giá trị
 *
 */
function App() {
  const [valueEmail, setValueEmail] = useState('khoa@cijs98.mindx.com');
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(valueEmail);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          placeholder="Nhập email"
          value={valueEmail}
          onChange={(e) => {
            setValueEmail(e.target.value);
          }}
        />
        <Input onChange={setValueEmail}></Input>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
export default App;
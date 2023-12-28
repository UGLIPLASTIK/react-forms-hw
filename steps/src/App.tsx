import './App.css'
import Form from './components/form'
import Data from './components/data'
import { useState } from 'react'
import moment from 'moment';
import { MouseEvent } from "react";

function App() {
  const [inputDate, setinputDate] = useState('');
  const [inputDistance, setInputDistance] = useState('');
  const [dataList, setDataList] = useState([])
  const handlerDataChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { target: { value: inputText } } = e;
    setinputDate(inputText)
  }

  const handlerDistanceChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { target: { value: inputText } } = e;
    setInputDistance(inputText)
  }

  const addItem = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    const checkDate = dataList.find(item => item.date == inputDate);

    if(checkDate) {
      checkDate.distance += Number(inputDistance);
      setinputDate('');
      setInputDistance('');
      setDataList(dataList.sort((a, b) => moment(b.date, 'DD.MM.YY') - moment(a.date, 'DD.MM.YY')));
    } else {
      const data = dataList.concat({date: inputDate, distance: Number(inputDistance)});
      setinputDate('');
      setInputDistance('');
      setDataList(data.sort((a, b) => moment(b.date, 'DD.MM.YY') - moment(a.date, 'DD.MM.YY')));
    }
  }

  const delItem = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    const day = e.currentTarget.closest('div')?.querySelector('.date')?.textContent;
    const itemIndex = dataList.indexOf(dataList.find(item => item.date == day));
    const newData = [...dataList]
    newData.splice(itemIndex, 1)
    setDataList(newData)
  }

  const editItem = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    const day = e.currentTarget.closest('.values-item')?.querySelector('.date')?.textContent;
    const distance = e.currentTarget.closest('.values-item')?.querySelector('.distance')?.textContent;
    const itemIndex = dataList.indexOf(dataList.find(item => item.date == day));
    setinputDate(day);
    setInputDistance(distance);
    const newData = [...dataList]
    newData.splice(itemIndex, 1)
    setDataList(newData)
  }

  return (
    <>
      <Form inputDate={inputDate} 
            setinputDate={handlerDataChange}
            inputDistance={inputDistance}
            setInputDistance={handlerDistanceChange}
            addItem={addItem}/>
      <Data list={dataList}
            delItem={delItem}
            editItem={editItem}/>
    </>
  )
}

export default App

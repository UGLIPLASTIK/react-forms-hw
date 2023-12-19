import { useState } from "react";

const Steps = () => {
  interface Item {
    data: string,
    distance: number,
    actions?: HTMLButtonElement,
  }

  const items: Array<Item> = [];

  const [list, setList] = useState<Item[]>([]);
  const [inputData, setInputData] = useState('');
  const [inputDistance, setInputDistance] = useState('');

  const handlerDataChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { target: { value: inputText } } = e;
    setInputData(inputText)
  }

  const handlerDistanceChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { target: { value: inputText } } = e;
    setInputDistance(inputText)
  }

  const addItem = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    items.push({data: `${inputData}`, distance: Number(inputDistance)})
    setInputData('');
    setInputDistance('');
    setList(items);
  }

  return (
    <div className="wrapper">
      <form>
        <fieldset>
          <div className="formGroup">
            <label htmlFor="data">
              Дата (ДД.ММ.ГГ)
              <input onChange={handlerDataChange} name="data" type="text" value={inputData}/>
            </label>
          </div>

          <div className="formGroup">
            <label>
              Пройдено км
              <input onChange={handlerDistanceChange} name="distance" type="number" pattern="^[0-9]+$" value={inputDistance}/>
            </label>
            
          </div>   
          <button onClick={addItem}>OK</button>
        </fieldset>
        <fieldset className="results">
            <div className="titles">
              <span>Дата (ДД.ММ.ГГ)</span>
              <span>Пройдено км</span>
              <span>Действия</span>
            </div>
            <div className="values">
              {list.map(item => <div key={item.data} className="values-item">
                <span>{item.data}</span><span>{item.distance}</span><span>✘</span>
              </div>)}
            </div>
        </fieldset>
      </form>
     
    </div>
  )
}

export default Steps;
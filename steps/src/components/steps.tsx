import { useState } from "react";

const Steps = () => {
  interface Item {
    data: string,
    distance: number,
    actions?: HTMLButtonElement,
  }

  const items: Item[] = [
    {
    data: '22.10.23',
    distance: 8.4,   
    },
    {
    data: '23.10.23',
    distance: 6.1,   
    },
  ];

  const [list, setList] = useState(items);

  
  

  return (
    <div className="wrapper">
      <form>
        <fieldset>
          <div className="formGroup">
            <label htmlFor="data">Дата (ДД.ММ.ГГ)</label>
            <input id="data" type="text" />
          </div>

          <div className="formGroup">
            <label htmlFor="distance">Пройдено км</label>
            <input id="distance" type="text" />
          </div>   
          <button>OK</button>
        </fieldset>
        <fieldset className="results">
            <div className="titles">
              <span>Дата (ДД.ММ.ГГ)</span>
              <span>Пройдено км</span>
              <span>Действия</span>
            </div>
            <div className="values">
              {items.map(item => <div className="values-item">
                <span>{item.data}</span><span>{item.distance}</span><span>✘</span>
              </div>)}

              {/* <div className="values-item">
                <span>22.11.23</span><span>6.5</span><span>TODO</span>
              </div>
              <div className="values-item">
                <span>22.11.23</span><span>6.5</span><span>TODO</span>
              </div>
              <div className="values-item">
                <span>22.11.23</span><span>6.5</span><span>TODO</span>
              </div> */}
            </div>
        </fieldset>
      </form>
     
    </div>
  )
}

export default Steps;
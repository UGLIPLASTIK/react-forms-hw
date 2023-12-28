interface Item {
  date: string,
  distance: number,
  actions?: HTMLButtonElement,
}

interface Props {
  list: Array<Item>,
  delItem(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void,
  editItem(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void,
}

const Data = ( { list, delItem, editItem }: Props ) => {
  return (
    <div className="data">
      <div className="titles">
        <span>Дата (ДД.ММ.ГГ)</span>
        <span>Пройдено км</span>
        <span>Действия</span>
      </div>
      <div className="values">
        {list.map(item => <div key={item.date} className="values-item">
          <span className="date" id="date">{item.date}</span>
          <span className="distance">{item.distance}</span>
          <div>
            <button onClick={editItem} className="delete-button">✎</button>
            <button onClick={delItem} className="delete-button">✘</button>
          </div>
        </div>)}
      </div>
    </div>
  )
}

export default Data;
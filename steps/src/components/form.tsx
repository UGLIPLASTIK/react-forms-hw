interface Props {
  inputDate: string,
  setinputDate(e: React.ChangeEvent<HTMLInputElement>): void,
  inputDistance: string,
  setInputDistance(e: React.ChangeEvent<HTMLInputElement>): void,
  addItem(e: React.MouseEvent<HTMLButtonElement>): void,
}

const Form = ({ inputDate, setinputDate, inputDistance, setInputDistance, addItem }: Props ) => {
  return (
    <div className="wrapper">
      <form>
        <fieldset>
          <div className="formGroup">
            <label htmlFor="date">
              Дата (ДД.ММ.ГГ)
              <input onChange={setinputDate} name="date" type="text" value={inputDate}/>
            </label>
          </div>

          <div className="formGroup">
            <label>
              Пройдено км
              <input onChange={setInputDistance} name="distance" type="number" pattern="^[0-9]+$" value={inputDistance}/>
            </label>
          </div>   
          <button onClick={addItem}>OK</button>
        </fieldset>
      </form>
    </div>
  )
}

export default Form;
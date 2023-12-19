const Steps = () => {
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
              <div className="values-item">
                <span>22.11.23</span><span>6.5</span><span>TODO</span>
              </div>
              <div className="values-item">
                <span>22.11.23</span><span>6.5</span><span>TODO</span>
              </div>
              <div className="values-item">
                <span>22.11.23</span><span>6.5</span><span>TODO</span>
              </div>
            </div>
        </fieldset>
      </form>
     
    </div>
  )
}

export default Steps;
import React from 'react';
import style from './TodoForm.module.css'
import ContentEditable from "react-contenteditable";

const TodoForm = ({
                    inputRef,
                    valueInput,
                    handleChangeInput,
                    cancelEdit,
                    saveChanges,
                    addTodo,
                    editMode,
                    arrayHashes
                  }) => {

  return (
    <div className={style.formTodo}>
      <div className={style.inputWithButtons}>
        <div className="input-wrapper">
          <label htmlFor="inputTodo" hidden>
            Todo input
          </label>
          {/*<input*/}
          {/*  type="text"*/}
          {/*  className={style.formInput}*/}
          {/*  id='inputTodo'*/}
          {/*  ref={inputRef}*/}
          {/*  value={valueInput}*/}
          {/*  onChange={handleChangeInput}*/}
          {/*  onKeyPress={e => {*/}
          {/*    if (e.key === 'Enter') {*/}
          {/*      addTodo()*/}
          {/*    }*/}
          {/*  }}*/}
          {/*/>*/}

        </div>

        <div>
          {
            editMode ?
              <>
                <button
                  onClick={cancelEdit}
                  className={`${style.btn} ${style.btnCancel}`}
                >
                  &#10006;
                </button>
                <button
                  onClick={saveChanges}
                  className={`${style.btn} ${style.btnSave}`}
                >
                  &#10003;</button>
              </> :
              <button
                onClick={addTodo}
                className={`${style.btn} ${style.btnAdd}`}
              >
                +
              </button>
          }
        </div>

      </div>


      <div className="formHashes">
        {
          arrayHashes.length > 0 && arrayHashes.map(hash => {
            return <span
              className={style.hashItem}
              key={hash}
            >{hash}</span>
          })
        }
      </div>
    </div>
  );
}

export default TodoForm;
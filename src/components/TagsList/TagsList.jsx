import React from 'react';
import style from './TagsList.module.css'

const TagsList = ({handleClickHash, todos}) => {
  let listHashes = todos.reduce((acc,todo) => {
    return acc.concat(todo.hashes)
  },[])
  listHashes = [...new Set(listHashes)]

  return (
    <div className={style.tags}>
      <h4 className={style.title}>Поиск по тегам:</h4>
      <div>
        <span onClick={() => handleClickHash(null)}>Все</span>
        {
          listHashes.map(hash => <span
              onClick={() => handleClickHash(hash)}
              key={hash}
            >
                  {hash}
                </span>
          )
        }
      </div>
    </div>
  );
};

export default TagsList;
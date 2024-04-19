import { listData } from '../../lib'
import Card from '../Card/Card'
import './list.scss'

function List() {
  return (
    <div className='list'>
      {listData.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  )
}

export default List

import './Detail.css';
import { trpc } from '../App';

function Detail(props: {
  id: number,
}) {
  const cat = trpc.useQuery(['get', props.id]);

  return (
    cat.data ? 
      <div className="Detail">
        <h2>Detail</h2>
        <div>{cat.data.id}</div>
        <div>{cat.data.name}</div>
      </div> : <div className="Detail"></div>
  );
}

export default Detail;

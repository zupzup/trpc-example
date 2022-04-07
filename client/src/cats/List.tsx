import './List.css';
import { trpc } from '../App';
import type { Cat } from '../../../server/src/router';
import { useState } from 'react';

function List(props: {
  setDetail: (id: number) => void,
}) {
  const [error, setError] = useState("");
  const cats = trpc.useQuery(['list']);
  const deleteMutation = trpc.useMutation(['delete'], {
    onSuccess: () => {
      cats.refetch();
    },
    onError: (data) => {
      setError(data.message);
    }
  });

  const handleDelete = async(id: number) => {
    deleteMutation.mutate({ id })
  };

  const catRow = (cat: Cat) => {
    return (
      <div key={cat.id}>
        <span>
          {cat.id}
        </span>
        <span>
          {cat.name}
        </span>
        <span>
          <a href="#" onClick={props.setDetail.bind(null, cat.id)}>detail</a>
        </span>
        <span>
          <a href="#" onClick={handleDelete.bind(null, cat.id)}>delete</a>
        </span>
      </div>
    );
  };

  return (
    <div className="List">
      <h2>Cats</h2>
      <span>{error}</span>
      { cats.data && cats.data.map((cat) => {
        return catRow(cat);
      })}
    </div>
  );
}

export default List;

import './Create.css';
import { ChangeEvent, useState } from 'react';
import { trpc } from '../App';

function Create() {
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  const cats = trpc.useQuery(['list']);
  const createMutation = trpc.useMutation(['create'], {
    onSuccess: () => {
      cats.refetch();
    },
    onError: (data) => {
      setError(data.message);
    }
  });

  const updateText = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const handleCreate = async() => {
    createMutation.mutate({ name: text });
    setText("");
  };

  return (
    <div className="Create">
      {error && error}
      <h2>Create Cat</h2>
      <div>Name: <input type="text" onChange={updateText} value={text} /></div>
      <div><button onClick={handleCreate}>Create</button></div>
    </div>
  );
}

export default Create;

import { Form, useActionData, useLoaderData } from 'react-router-dom';
import { network } from '../index';


export async function loader() {
  // /message エンドポイントからデータを取得
  const messageRes = await fetch(network + '/message');
  if (!messageRes.ok) {
    throw Error('Message Not Found');
  }
  const messageData = await messageRes.json();

  // /getData エンドポイントからデータを取得
  const getDataRes = await fetch(network + '/getData');
  if (!getDataRes.ok) {
    throw Error('Data Not Found');
  }
  const getData = await getDataRes.json();

  // 取得したデータを結合して返す
  return { messageData, getData };
}


export async function action({ request }) {
    const data = Object.fromEntries(await request.formData());
    const res = await fetch(network + '/form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const add = await res.json();
  
    return { add };
  }

const Alignment = () => {
    
    const loadedData = useLoaderData();
    const message = loadedData.messageData.message;
    const time = loadedData.messageData.time;
    const allData = loadedData.getData.allData;
    
    const actionData = useActionData();

  return (
  <>
      <div className='ml-4'>
        <h1 className='text-4xl font-bold mt-4'>Get message.</h1>
        <p className='text-lg m-2'>Message: {message}</p>
        <p className='text-lg m-2'>Time: {time}</p>
      </div>
      <div className='ml-4'>
        <h1 className='text-4xl font-bold mt-4'>Use List</h1>
        <Form className="flex flex-col items-start my-4" method='post'>
          <input className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-gray-500" name='data' placeholder='data' /><br />
          <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600" type='submit'>Submit</button>
        </Form>

        {actionData && (
          <p className='text-xl bg-gray-200 p-2 mr-4'>Added data: {actionData.add.addData}</p>
        )}
        <ul className='m-2 list-disc text-gray-700'>
          {allData.map((data) => (
            <li key={data.id} className='border-b'>{data.content}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Alignment;

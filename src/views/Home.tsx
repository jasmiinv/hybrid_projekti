import { useContext, useMemo } from 'react';
import MediaRow from '../components/MediaRow';
import { useMedia } from '../hooks/graphQLHooks';
// import {useMedia} from '../hooks/apiHooks';
import { SearchContext } from '../contexts/SearchProvider';

const Home = () => {
  const { mediaArray } = useMedia();
  const searchContext = useContext(SearchContext);

  const filteredMediaArray = useMemo(() => {
    if (searchContext?.search?.length! > 3) {
      return mediaArray.filter((item) => item?.description?.includes(searchContext?.search || ''));
    }
    return mediaArray
  },[searchContext?.search])

  return (
    <>
      <h2 className="text-4xl p-2">Recent loaded pictures</h2>
      <table>
        <thead>
          <tr>
            <th className="w-3/12 border border-slate-700">Minipic</th>
            <th className="w-1/12 border border-slate-700">Title</th>
            <th className="w-2/12 border border-slate-700">Description</th>
            <th className="w-1/12 border border-slate-700">Created</th>
            <th className="w-1/12 border border-slate-700">Size</th>
            <th className="w-1/12 border border-slate-700">Type</th>
            <th className="w-1/12 border border-slate-700">Owner</th>
            <th className="w-2/12 border border-slate-700">Actions</th>
          </tr>
        </thead>
        <tbody>
    
  
          {filteredMediaArray.map((item) => (
            <MediaRow key={item.media_id} item={item} />
          ))}

        </tbody>
      </table>
    </>
  );
};

export default Home;
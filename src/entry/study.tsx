import Study from '@/view/study';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import '../index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RecoilRoot>
    <Study />
  </RecoilRoot>,
);

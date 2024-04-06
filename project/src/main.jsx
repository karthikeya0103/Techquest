import React from 'react';
import ReactDOM from 'react-dom';
import { Routes, Route, HashRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import Children from './children';
import Relationship from './relationshipp';
import Myself from './myself';
import Age from './age';
import Summary from './summary';
import Whatmadeyou from './whatmadeyou';
import Therapybefore from './therapybefore';
import Relationswithparents from './relationswithparents';
import Withfamily from './withfamily';
import Medications from './medications';
import Diseases from './diseases';
import CRelationship from './relationship';
import Descrelationship from './descrelationship';
import Haveyouever from './haveyouever';
import Haveyoueverr from './haveyoueverr';
import Descrelationship2 from './descrelationship2';
import Descrelationship3 from './descrelationship3';
import Wereyouhappy from './wereuhappy';
import Didappreciated from './didappreciated';
import Neverinrelation from './pet';
import Friendsinschool from './friendsinschool';
import Bullied from './bullied';
import Grades from './grades';
import Studying from './studying';
import Siblings from './siblings';
import Neverinrelation2 from './neverinrelation2';
import Liked from './liked';
import Summary2 from './summary2';
import Summary3 from './summary3';
import RAge from './ager';
import Marital from './marital';
import Married from './married';
import Together from './together';
import NTogether from './ntogether';
import Violence from './violence';
import Alone from './alone';
import Pet from './pet';
import Rhaveyouever from './haveyouever';
import Whatled from './whatled';
import Expectations from './expectations';
import Othergender from './othergender';
import Feel from './feel';
import Cage from './cage';
import Related from './related';
import Parents from './parents';
import Oneplace from './oneplace';
import Wherechildlive from './wherechildlive';
import Save from './save';
import School from './school';
import CBullied from './cbullied';
import CTherapybefore from './ctherapybefore';
import Mental from './mental';
import Sleeping from './sleeping';
import Eating from './eating';
import Phobias from './phobias';
import Sad from './sad';
import Anger from './anger';
import Concentration from './concentration';
import Suicide from './suicide';
import Concerns from './concerns';
import Concerns2 from './concerns2';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="children" element={<Children />} />
        <Route path="relationshipp" element={<Relationship />} />
        <Route path="age" element={<Age />} />
        <Route path="myself" element={<Myself />} />
        <Route path="whatmadeyou" element={<Whatmadeyou />} />
        <Route path="therapybefore" element={<Therapybefore />} />
        <Route path="relationswithparents" element={<Relationswithparents />} />
        <Route path="withfamily" element={<Withfamily />} />
        <Route path="medications" element={<Medications />} />
        <Route path="diseases" element={<Diseases />} />
        <Route path="relationship" element={<CRelationship />} />
        <Route path="descrelationship" element={<Descrelationship />} />
        <Route path="haveyouever" element={<Haveyouever />} />
        <Route path="haveyoueverr" element={<Haveyoueverr />} />
        <Route path="descrelationship2" element={<Descrelationship2 />} />
        <Route path="descrelationship3" element={<Descrelationship3 />} />
        <Route path="wereyouhappy" element={<Wereyouhappy />} />
        <Route path="didappreciated" element={<Didappreciated />} />
        <Route path="neverinrelation" element={<Neverinrelation />} />
        <Route path="friendsinschool" element={<Friendsinschool />} />
        <Route path="bullied" element={<Bullied />} />
        <Route path="grades" element={<Grades />} />
        <Route path="studying" element={<Studying />} />
        <Route path="siblings" element={<Siblings />} />
        <Route path="neverinrelation2" element={<Neverinrelation2 />} />
        <Route path="liked" element={<Liked />} />
        <Route path="summary" element={<Summary />} />
        <Route path="ager" element={<RAge />} />
        <Route path="marital" element={<Marital />} />
        <Route path="married" element={<Married />} />
        <Route path="together" element={<Together />} />
        <Route path="ntogether" element={<NTogether />} />
        <Route path="violence" element={<Violence />} />
        <Route path="alone" element={<Alone />} />
        <Route path="pet" element={<Pet />} />
        <Route path="rhaveyouever" element={<Rhaveyouever />} />
        <Route path="whatled" element={<Whatled />} />
        <Route path="expectations" element={<Expectations />} />
        <Route path="othergender" element={<Othergender />} />
        <Route path="summary2" element={<Summary2 />} />
        <Route path="cage" element={<Cage />} />
        <Route path="related" element={<Related />} />
        <Route path="parents" element={<Parents />} />
        <Route path="oneplace" element={<Oneplace />} />
        <Route path="wherechildlive" element={<Wherechildlive />} />
        <Route path="save" element={<Save />} />
        <Route path="school" element={<School />} />
        <Route path="feel" element={<Feel />} />
        <Route path="cbullied" element={<CBullied />} />
        <Route path="ctherapybefore" element={<CTherapybefore />} />
        <Route path="mental" element={<Mental />} />
        <Route path="sleeping" element={<Sleeping />} />
        <Route path="eating" element={<Eating />} />
        <Route path="phobias" element={<Phobias />} />
        <Route path="sad" element={<Sad />} />
        <Route path="anger" element={<Anger />} />
        <Route path="concentration" element={<Concentration />} />
        <Route path="suicide" element={<Suicide />} />
        <Route path="concerns" element={<Concerns />} />
        <Route path="concerns2" element={<Concerns2 />} />
        <Route path="summary3" element={<Summary3 />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

reportWebVitals();

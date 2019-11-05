import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

// Components
import { Layout } from './layouts/Layout.jsx';
import Header from './components/Header';
import HomePage from './pages/HomePage';

const Styled = styled.div`
  font-family: 'Roboto', sans-serif;
`;

function App() {
  return (
    <Fragment>
      <Styled>
        <Header />
        <HomePage />
        <Layout>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur
          laborum sapiente odit illum quae iusto, error, ex doloremque
          architecto quos labore voluptate aliquid commodi dignissimos
          repudiandae incidunt. Voluptatem cumque consectetur necessitatibus hic
          sint, quibusdam labore dolores voluptatum in repudiandae, doloribus
          itaque eum eius magnam ut? Ullam quod soluta minus optio cupiditate
          dolorum aliquid eos dignissimos aperiam labore in adipisci tenetur
          sunt illum neque id quas, aliquam doloremque amet, nihil voluptatem
          doloribus mollitia, dolor voluptas? Doloremque, possimus. Perspiciatis
          tempora eaque, non libero repellendus veniam corrupti animi vel natus
          reiciendis? Quae esse corporis quam quisquam quidem, atque quis quos
          quo sequi, laboriosam beatae id sint aut earum distinctio cumque
          impedit vel doloremque eum tempore. Quidem minima ullam labore sint
          totam, modi odio iste earum commodi perspiciatis temporibus, maxime
          obcaecati? Ex repellendus nam cum doloremque suscipit eligendi
          voluptatibus, soluta ea cupiditate ipsa quae dolorum dolore aperiam
          minima quos molestiae maxime, ipsum saepe explicabo commodi magni
          quasi, inventore possimus consequuntur. Possimus soluta impedit unde
          neque illum optio, deleniti atque modi minus, voluptate iusto expedita
          aspernatur sapiente nesciunt corporis. Aut sunt totam esse!
          Repellendus, dignissimos illum illo dicta minus nobis impedit soluta
          quae deserunt, reiciendis delectus quod ut suscipit perspiciatis
          officia dolorem officiis eius ullam! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Dolorem dicta eaque nulla reiciendis
          voluptatibus, sit saepe officia nam mollitia, obcaecati laborum.
          Expedita dolore ea delectus deleniti! Nemo nobis quae vero beatae odit
          fugiat, quia tempore. Dolore in temporibus commodi voluptatem laborum
          laudantium est illum nostrum quaerat, soluta distinctio iste odio
          voluptate, nisi eius quos non amet, tempora magnam veniam debitis at
          sapiente? Aut, quidem! Nam iure, accusamus cumque dolor dolorem
          pariatur, ducimus dignissimos optio harum iste eaque maiores nesciunt
          repudiandae hic voluptatum non. Iure quam necessitatibus atque quia
          maxime nobis quod nesciunt placeat? Suscipit placeat voluptatibus
          maxime corporis quia fuga sunt laudantium fugit reprehenderit velit,
          itaque incidunt officiis aspernatur quaerat reiciendis nisi nihil?
          Tenetur eum libero iusto iure voluptatum, sapiente commodi, fugiat
          recusandae esse aliquam ipsa architecto? Cumque similique eum dolore!
          Dolores quibusdam assumenda nulla animi ipsum sequi dicta veritatis
          est, qui repudiandae, reprehenderit minus recusandae amet voluptate
          expedita at? Tempora culpa ut modi excepturi assumenda, fugiat
          adipisci sapiente. Ullam dolore, voluptatem blanditiis obcaecati eaque
          sunt! Soluta minima hic commodi. Ex nostrum maiores quis voluptates
          doloremque pariatur inventore atque? Necessitatibus cupiditate
          perspiciatis nobis perferendis ea aliquam, non at id ut quae excepturi
          maxime enim, iste nesciunt sint debitis. Optio a rem beatae
          voluptates, magni totam ipsum. Necessitatibus incidunt repudiandae
          exercitationem laudantium culpa amet, enim dicta obcaecati, recusandae
          quod, ipsa voluptas fugit. Dicta cum deserunt labore minus quis totam
          commodi laudantium aperiam enim! Dolor modi quod reiciendis fuga
          repellendus incidunt doloremque, autem illum temporibus, nemo unde
          veritatis officia neque alias libero. Numquam, sed. Enim corporis
          facere, aspernatur eveniet accusantium numquam animi nostrum dolor
          ipsa incidunt quaerat ea saepe sint tenetur aperiam dignissimos. Amet
          laboriosam voluptas doloremque tempore sunt totam. Voluptate labore
          alias, in recusandae sequi provident rem saepe maiores aut consectetur
          voluptatum earum laudantium suscipit dolorum corporis. Asperiores
          eveniet, animi excepturi consectetur eaque voluptate, natus
          consequuntur delectus voluptatum inventore iusto ex provident tempora.
          Dolores veniam sint possimus a. Minima aliquam veritatis ad debitis
          placeat voluptates quibusdam eos commodi quos eaque sint sed saepe,
          odit alias adipisci nemo nihil in ipsam esse! Voluptates nisi quas
          eveniet laboriosam eos harum deleniti ex cupiditate dolorem porro
          beatae quod consequuntur veniam exercitationem repudiandae blanditiis
          vero itaque ducimus tempora adipisci, dolor quisquam dignissimos.
          Velit temporibus ex quibusdam magni esse ipsa quo sit sint harum
          aspernatur. Harum vero sunt ratione velit, ipsam sequi et libero quod
          aliquid ut eaque voluptate? Laudantium excepturi sequi hic pariatur
          commodi maiores numquam maxime inventore recusandae. Commodi,
          cupiditate sed a doloribus dolor fugiat amet voluptates, possimus
          tempora dicta voluptatem! Eum quasi totam rerum laborum repudiandae
          natus nisi explicabo at ex quisquam reprehenderit, aspernatur
          molestiae neque deleniti architecto enim id fugit a nesciunt modi ab
          nostrum! Omnis hic culpa, eius iure accusantium, sint id facere
          architecto aliquid qui blanditiis et neque saepe? Vitae enim at error
          architecto cupiditate ea fugit porro tenetur nulla ipsa doloribus
          eligendi inventore sint veritatis nemo iusto consequatur nobis,
          accusamus eos delectus facilis quam voluptas. Odit blanditiis maxime
          iste, velit similique veniam dolorem temporibus labore? Laudantium,
          placeat esse illum aut porro praesentium mollitia officia fugit
          dignissimos vitae, provident quos ipsam similique. Explicabo deserunt
          culpa quod illum, sint totam delectus blanditiis nemo suscipit nostrum
          vero dignissimos at, iusto natus quas animi aliquam obcaecati placeat.
          Modi sunt impedit adipisci facere quidem corrupti autem, esse earum
          dolores vero nesciunt temporibus! Illum, modi quibusdam sequi
          perspiciatis facere cum veniam ipsum vitae dolore corporis nemo animi
          blanditiis numquam porro! Excepturi iusto harum enim non veniam totam
          atque dolorum laboriosam, ratione sit eveniet architecto minus
          expedita debitis quam quae facilis molestiae sunt in perspiciatis
          odit! Beatae vitae at, pariatur tenetur laboriosam alias praesentium
          ad? In ducimus inventore dignissimos perferendis culpa veniam aperiam
          nulla explicabo quas assumenda quasi vel sed cumque, libero
          blanditiis, eum debitis doloribus et consectetur, unde eligendi
          mollitia voluptatibus facilis? Distinctio ipsum architecto cum quas
          sequi culpa dicta nobis, animi excepturi qui autem! Quasi fugiat
          cupiditate saepe sed pariatur quis iusto molestiae, reprehenderit
          inventore blanditiis. Tenetur sunt placeat corrupti tempora. Dolorem
          facilis et dolorum sapiente sunt est aliquid libero quae perferendis
          voluptate! Nobis fuga reprehenderit sapiente, nisi, deleniti harum
          deserunt expedita necessitatibus inventore, quisquam consequuntur
          libero facilis error! Beatae tempore rerum adipisci velit illum
          similique assumenda et accusantium hic aspernatur fugit excepturi
          provident, repudiandae culpa minus facilis non earum corporis quia
          aliquam incidunt nihil! Quis dignissimos excepturi, deserunt nostrum
          itaque iusto blanditiis dolores cupiditate, exercitationem asperiores,
          odit vel illo possimus! Quae facere aperiam, quaerat minima atque
          impedit consequatur in commodi officiis nihil dolore labore nesciunt
          dolorum corrupti libero, distinctio ex tempora ipsum perferendis culpa
          omnis officia. Ab perferendis quasi culpa, obcaecati eos eligendi in
          optio illo nam! Nobis delectus quia dignissimos, repudiandae maiores,
          ratione tempore harum, cum similique iste laboriosam! Perspiciatis
          ipsam quod dolores incidunt, officiis consequatur vel laudantium
          provident mollitia consequuntur in magnam labore, numquam culpa odit
          odio itaque, cum beatae eveniet iusto voluptatem. Commodi iste
          provident ducimus! Id magni quae sunt dolorem odio iure nulla voluptas
          consequatur mollitia minima, aliquid accusamus laborum autem deserunt
          consectetur? Perspiciatis cumque, aspernatur cupiditate sunt at animi
          delectus totam maxime veniam tempore eveniet distinctio mollitia,
          illum facere reiciendis tenetur quibusdam dolores tempora? Sequi enim
          dolores esse sapiente minima nam quisquam animi facere, autem
          obcaecati asperiores provident, modi incidunt saepe id, necessitatibus
          error. Facere at dolorum sed placeat minus doloribus. Accusamus soluta
          blanditiis ipsum provident, minus dolorem illo mollitia inventore
          quis, perferendis eum. Veritatis blanditiis facilis eaque aperiam
          nostrum veniam obcaecati dolor, nulla possimus aliquid rem atque minus
          cupiditate sed assumenda ullam, architecto, qui aut beatae illo
          tempora doloribus! At incidunt tenetur, in dicta officia voluptatem
          assumenda quo minus quidem quos veniam, atque eum ea culpa id.
          Placeat, quisquam, et ipsum fuga autem odio saepe hic, non porro
          veritatis nesciunt est qui omnis dicta sequi sit at repellendus quidem
          nisi! Natus, impedit a ratione cum accusamus officiis error neque
          consectetur iusto tenetur reiciendis labore quo ea quis eum earum
          eaque deleniti corporis dolor quod optio at. Corrupti aliquid quam
          tempora non eum, delectus possimus esse corporis reprehenderit.
          Aliquid qui consectetur animi ut voluptates. Perferendis voluptatum in
          voluptas?
        </Layout>
      </Styled>
    </Fragment>
  );
}

export default App;

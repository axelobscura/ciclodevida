import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>CALCULADORA DEL CICLO DE VIDA DEL CONCRETO | Instituto Mexicano del Cemento y del Concreto A.C.</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" />
      </Head>

      <main>
        <h1 className={styles.title}>
          CALCULADORA DE CICLO DE VIDA
        </h1>
        <p className={styles.description}>
          INSTITUTO MEXICANO DEL CEMENTO Y DEL CONCRETO A.C.
        </p>
        <hr/>
        <div className='container'>
        <ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" id="home-tab" data-toggle="tab" data-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">DIESEL</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="profile-tab" data-toggle="tab" data-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">GASOLINA</button>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">...</div>
  <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>
  <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div>
</div>

        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">DIESEL</label>
            <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">PC DIESEL</label>
            <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">FECO2 t/MJ</label>
            <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">ECO2 t</label>
            <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Poder Calorífico</label>
            <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Diesel Pod Cal (MJ/bl)</label>
            <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Diesel P Cal (MJ/l)</label>
            <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          </div>
          <button type="submit" class="btn btn-secondary mb-3">CALCULAR DATOS</button>
        </form>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://imcyc.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          © 2022 Todos Los Derechos Reservados. Instituto Mexicano del Cemento y del Concreto A.C.
        </a>
      </footer>
    </div>
  )
}

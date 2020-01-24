<template>
  <div id="page-wrap">
    <img src="../assets/matheus.jpg" alt="Matheus Falconde" id="pic" width="280" />

    <div id="contact-info" class="vcard">
      <h1 class="fn">Matheus Falconde</h1>

      <p>
        Telefone:
        <span class="tel">(41) 99614-6151</span>
        <br />Email:
        <a
          class="email"
          href="mailto:matheus.felipe2504@gmail.com"
        >matheus.felipe2504@gmail.com</a>
        <br />
        Linkedin:
        <a
          class="email"
          href="https://www.linkedin.com/in/matheus-falconde/"
        >linkedin.com/in/matheus-falconde/</a>
      </p>
    </div>

    <div id="objective">
      <p>
        Experiência de 4 anos em Desenvolvimento
        de Sistemas Web. Expertise em JavaEE,
        JSF, Spring Boot, JPA, DB2, PostgreSql,
        MySql, MongoDB, Angular2, Vue, Jquery,
        Cordova, Android, Python, C#, NodeJS,
        NestJS, Cloud AWS, Azure, Google e
        Bluemix.
        Bacharel em Sistemas de Informação pela
        Universidade Positivo (dez/2018).
        Inglês Técnico
      </p>
    </div>

    <div class="clear"></div>

    <dl>
      <dd class="clear"></dd>

      <dt>Formação Acadêmica</dt>
      <dd>
        <h2>Sistemas de Informação</h2>
        <p>
          <strong>Universidade Positivo</strong>, Bacharel (2015 - 2018)
        </p>
      </dd>

      <dd class="clear"></dd>

      <dt>Skills</dt>
      <dd>
        <h2>Desenvolvimento de Software</h2>
        <p>
          JavaEE,
          JSF, Spring Boot, JPA, DB2, PostgreSql,
          MySql, MongoDB, Angular2, Vue, Jquery,
          Cordova, Android, Python, C#, NodeJS,
          NestJS, Cloud AWS, Azure, Google e
          Bluemix.
        </p>
      </dd>

      <dd class="clear"></dd>

      <dt>Experiência</dt>
      <dd>
        <h2>LUME SERVIÇOS DE TECNOLOGIA S.A.</h2>
        <span style="font-weight: bold">Analista Desenvolvedor Java - Abr 2018 - Atual</span>
        <ul>
          <li>
            Análise técnica junto ao cliente, desenvolvimento e
            manutenção de sistemas.
          </li>
        </ul>
        <span style="font-weight: bold">Desenvolvedor Java - Ago 2016 - Abr 2018</span>
        <ul>
          <li>
            Responsável pelo desenvolvimento e manutenção de
            sistemas de controle de estoque, vendas de peças, oficinas e
            vendas diretas para as concessionárias do segmento
            Automotivo
          </li>
        </ul>
        <span style="font-weight: bold">Estagiário - Out 2015 - Jul 2016</span>
        <ul>
          <li>
            Suporte no desenvolvimento de sistemas utilizando Java EE,
            JSF, JPA, Primefaces e DB2
          </li>
        </ul>

        <br />
      </dd>
      <dd class="clear"></dd>

      <dt>Atividades Extra</dt>
      <dd>
        <span style="font-weight: bold">HACKATHON BRF 2016</span>
        <ul>
          <li>Vencedor com o Projeto CCF</li>
        </ul>
        <span style="font-weight: bold">MARATONA DE PROGRAMAÇÃO 2016</span>
        <ul>
          <li>Vencedor com mais problemas resolvidos</li>
        </ul>
        <span style="font-weight: bold">HACKATHON GASTROMOTIVA 2018</span>
        <ul>
          <li>Participação como mentor</li>
        </ul>
        <span style="font-weight: bold">HACKATHON QUANTUM 2016</span>
        <ul>
          <li>Terceiro lugar com o projeto SafeQids</li>
        </ul>
      </dd>

      <dd class="clear"></dd>
    </dl>

    <div class="clear"></div>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
body {
  font: 16px Helvetica, Sans-Serif;
  line-height: 24px;
  background: url(../assets/noise.jpg);
}
.clear {
  clear: both;
}
#page-wrap {
  width: 800px;
  margin: 40px auto 60px;
}
#pic {
  float: right;
  margin: -30px 0 0 0;
}
h1 {
  margin: 0 0 16px 0;
  padding: 0 0 16px 0;
  font-size: 42px;
  font-weight: bold;
  letter-spacing: -2px;
  border-bottom: 1px solid #999;
}
h2 {
  font-size: 20px;
  margin: 0 0 6px 0;
  position: relative;
}
h2 span {
  position: absolute;
  bottom: 0;
  right: 0;
  font-style: italic;
  font-family: Georgia, Serif;
  font-size: 16px;
  color: #999;
  font-weight: normal;
}
p {
  margin: 0 0 16px 0;
}
a {
  color: #999;
  text-decoration: none;
  border-bottom: 1px dotted #999;
}
a:hover {
  border-bottom-style: solid;
  color: black;
}
ul {
  margin: 0 0 32px 17px;
}
#objective {
  width: 500px;
  float: left;
}
#objective p {
  font-family: Georgia, Serif;
  font-style: italic;
  color: #666;
}
dt {
  font-style: italic;
  font-weight: bold;
  font-size: 18px;
  text-align: right;
  padding: 0 26px 0 0;
  width: 150px;
  float: left;
  height: 100px;
  border-right: 1px solid #999;
}
dd {
  width: 600px;
  float: right;
}
dd.clear {
  float: none;
  margin: 0;
  height: 15px;
}
</style>

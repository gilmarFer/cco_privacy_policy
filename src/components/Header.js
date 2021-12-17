import React from "react";

export default function Header() {
  return (
    <section
      id="abount-me"
      className="text-black bg-white body-font h-screen flex flex-wrap content-center"
    >
      <div className="container px-5 py-10 mx-auto lg:px-40">
        <div className="flex flex-col w-full mb-20">
          {/* <p className="lg:w-2/3 mx-auto leading-relaxed text-base"> */}
          <strong>Privacy Policy</strong>
          <br />
          Privacy Policy regarding the Catalog Catolico Online application
          developed by Gilmar Fernandes, distributed on Google Play for free and
          without advertisements.
          <br />
          <br />
          We do not store your data, period. No data is requested, collected or
          stored. This application is a catalog, and as such allows access to
          information contained on the Internet, not requiring any user data.
          Physically, we cannot. We don't have where to store it. We don't even
          have a server database to store it. So even if the Pope kindly asked
          to see his data, we would have nothing to show. Olá, me chamo Gilmar
          Fernandes, tenho 27 anos e sou de Belo Horizonte/MG
          <br />
          <br />
          ----------------------------------------------------------------------------------------------
          <br />
          <br />
          <strong>Política de Privacidade</strong>
          <br />
          Política de Privacidade referente ao aplicativo Catálogo Catolico
          Online desenvolvido por Gilmar Fernandes, destribuido na Google play
          de forma totalmente gratuita e sem anuncios.
          <br />
          <br />
          Não armazenamos seus dados, ponto final. Nenhum dado é solicitado,
          coletado ou armazenado. Esta aplicação é um catálogo, e como tal
          permite o acesso às informações contidas na Internet, não necessitando
          de quaisquer dados do utilizador. Fisicamente, não podemos. Não temos
          onde armazená-lo. Não temos nem um banco de dados de servidor para
          armazená-lo. Portanto, mesmo que o Papa gentilmente pedisse para ver
          seus dados, não teríamos nada para mostrar.
        </div>
      </div>
    </section>
  );
}

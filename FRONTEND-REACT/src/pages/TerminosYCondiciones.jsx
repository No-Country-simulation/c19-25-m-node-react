import React from "react";

function TerminosYCondiciones() {
  const fecha = "24/07/2024";
  const correoElectrónicoAdmin = "admin@yolocuido.arg";
  const paisYoLoCuido = "Argentina";

  return (
    <div className="container my-5 ">
      <h1>Términos y Condiciones de Uso</h1>
      <p>
        <strong>Última actualización: {fecha}</strong>
      </p>

      <p>
        Bienvenido a <strong>Yo lo Cuido</strong>, una plataforma dedicada a
        conectar cuidadores y paseadores de mascotas con propietarios de
        mascotas. Al acceder o utilizar nuestro sitio web y servicios, aceptas
        cumplir con los siguientes Términos y Condiciones. Si no estás de
        acuerdo con estos términos, no utilices nuestro servicio.
      </p>

      <h2>1. Aceptación de Términos</h2>
      <p>
        Al usar <strong>Yo lo Cuido</strong>, aceptas estos Términos y
        Condiciones y nuestra Política de Privacidad (cuando esté disponible).
        Nos reservamos el derecho de modificar estos términos en cualquier
        momento. Las modificaciones serán efectivas a partir de su publicación
        en el sitio web. Es tu responsabilidad revisar periódicamente estos
        términos.
      </p>

      <h2>2. Servicios Ofrecidos</h2>
      <p>
        <strong>Yo lo Cuido</strong> proporciona una plataforma para que los
        cuidadores y paseadores de mascotas publiquen anuncios y para que los
        propietarios de mascotas busquen y reserven estos servicios. Los
        servicios incluyen la publicación de anuncios, la búsqueda de anuncios y
        la reserva de servicios de cuidado de mascotas.
      </p>

      <h2>3. Responsabilidad del Usuario</h2>
      <h3>3.1 Publicación de Anuncios</h3>
      <p>
        Los usuarios son responsables de la exactitud, veracidad y legalidad de
        los anuncios que publican en <strong>Yo lo Cuido</strong>. Nos
        reservamos el derecho de eliminar anuncios que consideremos inapropiados
        o que infrinjan nuestros términos.
      </p>

      <h3>3.2 Reservas</h3>
      <p>
        Los usuarios que realizan reservas son responsables de cumplir con los
        términos acordados con el cuidador o paseador. Cualquier disputa
        relacionada con las reservas debe resolverse directamente entre el
        propietario de la mascota y el cuidador/paseador.
      </p>

      <h2>4. Privacidad y Datos del Usuario</h2>
      <p>
        Actualmente, no contamos con una Política de Privacidad formal. En el
        futuro, estableceremos una política que describa cómo recopilamos,
        usamos y protegemos la información de nuestros usuarios. Te
        notificaremos cuando esta política esté disponible.
      </p>

      <h2>5. Pagos y Tarifas</h2>
      <p>
        Aunque planeamos implementar un sistema de pagos en el futuro,
        actualmente no ofrecemos opciones para pagos mediante tarjeta u otros
        métodos de pago en la plataforma. Las futuras implementaciones de pago
        se anunciarán adecuadamente.
      </p>

      <h2>6. Modificaciones y Cancelaciones</h2>
      <p>
        Dado que no hemos implementado un sistema formal para la modificación o
        cancelación de servicios, cualquier cambio en las reservas debe ser
        acordado directamente entre el usuario y el cuidador/paseador. En el
        futuro, se establecerán políticas específicas para estas situaciones.
      </p>

      <h2>7. Contacto y Soporte</h2>
      <p>
        Para consultas o soporte, puedes ponerte en contacto con nosotros a
        través de:
      </p>
      <ul>
        <li>
          <strong>Correo Electrónico:</strong> {correoElectrónicoAdmin}
        </li>
        <li>
          <strong>Plataforma:</strong> A través de la sección de contacto en el
          sitio web de <strong>Yo lo Cuido</strong>.
        </li>
      </ul>

      <h2>8. Limitación de Responsabilidad</h2>
      <p>
        <strong>Yo lo Cuido</strong> no es responsable de las acciones de los
        usuarios en la plataforma. No garantizamos la exactitud, integridad o
        calidad de los anuncios publicados ni la calidad de los servicios
        prestados por los cuidadores/paseadores. La responsabilidad por
        cualquier daño o pérdida derivada del uso de la plataforma recae
        exclusivamente en el usuario.
      </p>

      <h2>9. Ley Aplicable</h2>
      <p>
        Estos Términos y Condiciones se regirán e interpretarán de acuerdo con
        las leyes de {paisYoLoCuido}, sin tener en cuenta sus principios de
        conflicto de leyes.
      </p>

      <h2>10. Aceptación de los Términos</h2>
      <p>
        Al utilizar <strong>Yo lo Cuido</strong>, confirmas que has leído,
        comprendido y aceptado estos Términos y Condiciones. Si tienes alguna
        pregunta sobre estos términos, por favor contáctanos.
      </p>

      <div className="text-center mt-4">
        <p className="signature">
          Atentamente, la administración de:
        </p>
        <p className="allura fontsize-big">
          <strong>Yo Lo Cuido</strong>
        </p>
      </div>
    </div>
  );
}

export default TerminosYCondiciones;

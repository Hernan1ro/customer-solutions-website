import styles from "../styles/components/privacitypolicies.module.css";

export const PrivacityPolicies = ({ handleClick }) => {
  return (
    <div className={styles.privacity_politics}>
      <article>
        <div>
          <h3>POLÍTICA DE PROTECCIÓN DE DATOS PERSONALES</h3>
          <p>
            De conformidad con la Ley 1581 de 2012 y el Decreto 1377 de 2013 y
            demás normas que lo modifiquen o sustituyan, en mi (nuestra) calidad
            de potencial cliente autorizo (autorizamos) a SABIA SOLUCIONES Y
            FINANZAS S.A.S y SABIA AGENCIA DE SEGUROS LTDA., como responsable
            del tratamiento de mi (nuestros) datos, aportados mediante el
            diligenciamiento de este formato o por cualquier otro medio, para
            ser utilizados previamente y en desarrollo de los contratos
            financieros a celebrarse con dicha entidad. Esta autorización
            permitirá a SABIA SOLUCIONES Y FINANZAS S.A.S y SABIA AGENCIA DE
            SEGUROS LTDA., a recolectar, transferir, almacenar, usar, circular,
            suprimir, compartir, actualizar y transmitir mis datos personales,
            de acuerdo con el procedimiento para el tratamiento de los datos
            personales en cumplimiento de las siguientes finalidades:
          </p>
          <ol>
            <li>
              1.Verificar la información en cumplimiento de la exigencia legal
              de conocimiento del cliente.
            </li>
            <li>
              2.Adoptar medidas tendientes a la prevención de actividades
              ilícitas.
            </li>
            <li>
              3.Adelantar las acciones de cobro de recuperación de cartera, en
              virtud de las políticas internas y normas aplicables.
            </li>
            <li>
              4.Para el tratamiento de los datos personales protegidos por
              nuestro ordenamiento jurídico.
            </li>
            <li>
              5.Para el tratamiento y protección de los datos de contacto
              (direcciones de correo físico, electrónico, redes sociales y
              teléfono).
            </li>
            <li>
              6.El alcance de la autorización comprende la facultad para que
              SABIA SOLUCIONES Y FINANZAS S.A.S y SABIA AGENCIA DE SEGUROS
              LTDA., le envíe mensajes con contenidos institucionales,
              notificaciones, información del estado de cuenta, saldos, cuotas
              y/o primas pendientes de pago, información de pólizas y demás
              información relativa al portafolio de servicios de la entidad, a
              través de correo electrónico, redes sociales y/o mensajes de texto
              al teléfono móvil.
            </li>
            <li>
              7.Administrar de buena forma los documentos físicos (copias y/o
              originales) entregados de manera presencial o por correo
              electrónico por el Cliente, para la viabilidad de diferentes
              operaciones financieras relativas al portafolio de servicios
              ofrecidos por SABIA SOLUCIONES Y FINANZAS S.A.S y SABIA AGENCIA DE
              SEGUROS LTDA.,
            </li>
            <li>
              8.Informarme sobre las novedades y modificaciones de productos o
              servicios, la realización de actos de promoción y publicidad sobre
              éstos, la invitación a eventos, la actualización de datos y las
              demás actividades de mercadeo, estadística y administración
              necesarias para el cabal desarrollo del objeto social de SABIA
              SOLUCIONES Y FINANZAS S.A.S y SABIA AGENCIA DE SEGUROS LTDA.,
              Entregarlos o compartirlos con terceros en desarrollo de la
              relación contractual.
            </li>
            <li>
              9.Transmitirlos a servidores alojados en países extranjeros con el
              fin de brindar un mejor servicio y seguridad, en condiciones que
              garantizan el cumplimiento de la ley.
            </li>
            <li>
              10.Para que la información financiera, datos personales,
              comerciales, privados, semiprivados o sensibles recolectados o por
              mi (nosotros) suministrados o por terceros autorizados por SABIA
              SOLUCIONES Y FINANZAS S.A.S y SABIA AGENCIA DE SEGUROS LTDA. por
              cualquier medio, pueda ser utilizada como medio de prueba.
            </li>
          </ol>
          <p>
            Mis derechos como titular de los datos son los previstos en la
            constitución y la ley, especialmente el derecho a conocer,
            actualizar, rectificar y suprimir mi información personal; así como
            el derecho a revocar el consentimiento otorgado para el tratamiento
            de datos personales. Estos los puedo ejercer a través de los canales
            dispuestos por SABIA SOLUCIONES Y FINANZAS S.A.S y SABIA AGENCIA DE
            SEGUROS LTDA., para la atención al público. La información del/los
            formatos del cual forma parte la presente autorización, así como los
            documentos físicos entregados, los he suministrado de forma
            voluntaria y es verídica.
          </p>
          <p>
            Para lo anterior continúo navegando este sitio en señal de
            ACEPTACION.
          </p>
          <button onClick={handleClick}>Cerrar esta ventana</button>
        </div>
      </article>
    </div>
  );
};

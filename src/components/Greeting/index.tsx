import Signatures from "../../../public/signatures.react.svg";

const Intro = (): JSX.Element => {
  return (
    <div className="flex justify-center border-t border-joanGreen-600 py-20 text-center selection:bg-joanGreen-600 selection:text-white">
      <div className="max-w-[36rem] space-y-6 uppercase text-joanGreen-600">
        <p>
          Vista uma roupa para se sentir especial e venha confortável para um
          dia de festa com música, bebidas, drinks, antepastos e comidinhas.
          Gostoso demais.Vista uma roupa para se sentir especial e venha
          confortável para um dia de festa com música, bebidas, drinks,
          antepastos e comidinhas. Gostoso demais.
        </p>
        <Signatures className="m-auto text-black" />
      </div>
    </div>
  );
};

export default Intro;

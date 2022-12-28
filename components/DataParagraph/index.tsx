interface IDataParagraphProps {
  label: string;
  data: string;
}

export default function DataParagraph({ label, data }: IDataParagraphProps) {
  return (
    <div className="flex flex-col gap-1">
      <small className="text-slate-500 opacity-60 font-normal">{label}</small>
      <p className="flex flex-wrap font-medium text-lg">{data}</p>
    </div>
  );
}

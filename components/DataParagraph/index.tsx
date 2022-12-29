interface IDataParagraphProps {
  label: string;
  data: string;
  className?: string;
}

export default function DataParagraph({ label, data, className }: IDataParagraphProps) {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      <small className="text-slate-500 opacity-60 font-normal">{label}</small>
      <p className="flex flex-wrap font-medium text-lg break-all">{data}</p>
    </div>
  );
}

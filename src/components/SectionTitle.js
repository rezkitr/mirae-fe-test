const SectionTitle = ({ title, subTitle }) => {
  return (
    <div className="text-center mb-10 md:mb-12">
      <h1 className="mb-2 md:mb-3 font-medium text-xl md:text-3xl">{title}</h1>
      <p className="text-sm md:text-base">{subTitle}</p>
    </div>
  )
}

export default SectionTitle

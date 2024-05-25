interface ArrowLinksType{
    elementId:string
}
function ArrowLinks({elementId}:ArrowLinksType) {
  return (
    <a className="arrowsLink" href={elementId}>
        <div className="arrows">
            <div className="arrow">
                <div className="left"></div>
                <div className="right"></div>
            </div>
            <div className="arrow">
                <div className="left"></div>
                <div className="right"></div>
            </div>
            <div className="arrow">
                <div className="left"></div>
                <div className="right"></div>
            </div>
        </div>
    </a>
  )
}

export default ArrowLinks
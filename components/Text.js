const Text = ({ content }) => {
    const { heading, column1 } = content;
   
    return(
        <section className="b-text  c-section" id="learn-more">
            <div className="o-wrapper">
                <div className="o-grid o-grid--gap-xxl">
                    <div className="o-grid__col l:o-grid__col--span-4">
                        <h2 className="b-text__heading">{heading ? heading : 'Text'}</h2>
                    </div>
                    <div className="o-grid__col l:o-grid__col--span-8">
                        <div className={"c-formatted"} dangerouslySetInnerHTML={{__html: column1 ? column1 : 'Lorem upsum...'}} />        
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Text;
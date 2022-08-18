import Link from 'next/link'
import Image from 'next/image'
import imageLoader from './../imageLoader'
import styles from '../styles/Post.module.css'
import styled from 'styled-components';

const variants = {
  hidden: { opacity: 0, x: 0, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 0 },
}


const Article = styled.article`
  display: grid; 
  margin: 2em 0 4em 0;
  grid-gap: 1em;
  @media screen and (max-width: 768px){
    grid-template-columns: 1fr; 
  }
  grid-template-columns: 1fr 3fr; 
`;

const RespImg = styled.img`
  width: 100%;
  @media screen and (max-width: 768px){
    margin: 2em 0; 
  }
`;

const InnerTitle = styled.h2`
  font-size: 24px;
`;

const InnerText = styled.div`
  text-decoration: none; 
`;

export default function Post( props ) {
  console.log(props);

  const imgSrc = 'https://placedog.net/500/300';
  const { title, slug, tags } = props;
  return (
    <Article>
      <div className={styles.articleFlex}>
        <Image src={imgSrc} loader={imageLoader} width={"300"} height={"200px"} />
      </div>
      <div className={styles.innerFlex}>
          <a href={`/posts/${slug}`} className={styles.artMarg}><h2 dangerouslySetInnerHTML={{__html: title ? title.replace(/<[^>]+>/g, '') : 'Article Title'}} /></a>
          <div>
            <div className={styles.artMarg}><Link href={{ pathname: `/authors/}`, query: { name: 'cate' }}}><a>T Ester</a></Link><br/>
              <div>Tags:
              <ul>
                {tags ? tags.map((t, id) => {
                  return <li className={styles.tags} key={id}><Link href={`/topic/${t.slug}`}><a>{t.name}</a></Link></li>; 
                }).slice(0, 1) : 'no tags' }
              </ul>
              </div>
            </div>
          </div>
        </div>
    </Article>
  )
}

import React from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import '../assets/styles/App.scss';

// import useInitialState from '../hooks/useInitialState';

// const API = 'https://api.jsonbin.io/b/5ea16a131299b9374234b2de/2/';  // se removió por que ya esta el initialState

const Home = ({ mylist, trends, originals }) => {
  // const initialState = useInitialState(API);
  return (
    <>
      
      <Search isHome />

      {mylist.length > 0 && (
        <Categories title='Mi Lista'>
          <Carousel>
            {mylist.map((item) => 
                <CarouselItem 
                  key={item.id} 
                  {...item} 
                  isList 
                />)
            }
          </Carousel>
        </Categories>
      )}

      <Categories title='Tendencias'>
        <Carousel>
          {trends.map((item) => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>

      <Categories title='Originales de Platzi Video'>
        <Carousel>
          {originals.map((item) => (
          
          <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>
    </>
  );
};

// se traen del estado los valores
const mapStateToProps = (state) => {
  return {
    user: state.user,
    mylist: state.mylist,
    trends: state.trends,
    originals: state.originals,
  };
};

// export default Home;
export default connect(mapStateToProps, null)(Home);

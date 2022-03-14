import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllLists } from '../../redux/store';
import ListForm from '../ListForm/ListForm';


import styles from './Lists.module.scss';

const Lists = () => {

    const lists = useSelector(state => getAllLists(state));

    return(
        <section className={styles.lists}>
            <h2 className={styles.heading}>Browse lists</h2>
            
            {lists.map(list => (
            <Link key={list.id} to={'/list/' + list.id} className={styles.listLink}>
                <h3>{list.title}</h3>
                <p>{list.description}</p>
            </Link>
            ))}

            <ListForm />
        </section>
    )
};

export default Lists
import { FC } from 'react';
import cn from 'classnames';
import { Link } from "react-router-dom";
import { PagePath } from 'app/lib/routes';
import { Container } from 'shared/ui/Container';
import styles from "./Header.module.scss";
import { Search } from 'shared/ui/Search';

interface IHeaderProps {
    className?: string;
}

export const Header: FC<IHeaderProps> = (props) => {
    const { className } = props;

    return (
        <header className={cn([styles.header, className])}>
            <Container>
                <div className={styles.headerContent}>
                    <img
                        className={styles.logo}
                        width={60}
                        height={60}
                        src="/images/logo.png"
                        alt="Logo of product"
                    />
                    <div className={styles.location}>
                        <img 
                            className={styles.locationIcn}
                            src='/images/svg/locationIcn.svg'
                            alt='location'
                            width={9}
                            height={14}
                        />
                        <p className={styles.locationText}>
                            Тель Авив
                        </p>
                    </div>
                    <nav className={styles.navigation}>
                        <ul className={styles.navigationList}>
                            <li className={styles.navigationItem}>
                                <Link className={styles.navigationLink} to={PagePath.Home}>
                                    Скидки
                                </Link>
                            </li>
                            <li className={styles.navigationItem}>
                                <Link className={styles.navigationLink} to={PagePath.Coupons}>
                                    Купоны
                                </Link>
                            </li>
                            <li className={styles.navigationItem}>
                                <Link className={styles.navigationLink} to={PagePath.Stores}>
                                    Магазины
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <div className={styles.searchWrapper}>
                        <img
                            src="/images/svg/searchIcon.svg"
                            alt="search icon"
                            width={17}
                            height={17}
                            className={styles.searchIcon}
                        />
                        <Search
                            placeholder='Поиск акций и магазинов'
                            className={styles.search}
                        />
                    </div>
                    <div className={styles.avatar}>
                        <img 
                            className={styles.avatar__icn}
                            width={38}
                            height={36}
                            src="/images/avatar.png"
                            alt="user"
                        />
                    </div>
                </div>
            </Container>
        </header>
    )
};

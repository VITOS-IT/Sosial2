import React, {useState} from 'react'
import s from './Paginator.module.css'
import cn from 'classnames'


let Paginator = ({totalItemCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {

    let pagesCount = Math.ceil(totalItemCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount/portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1)*portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize ;

    return <div className={cn(s.usersPage)}>
        {portionNumber > 2 &&
            <button onClick={() => {setPortionNumber(1)}}>FIRST</button> }
        {portionNumber > 1 &&
            <button onClick={() => {setPortionNumber(portionNumber-1)}}>PREV</button> }

        {pages.filter(p => p >= leftPortionPageNumber && p <=rightPortionPageNumber)
            .map(u => {
                return <span className={(currentPage === u && s.selectedPage) || s.notSelectedPage}
                    key={u}
                             onClick={() => {
                                 onPageChanged(u);
                             }}>{u}</span>
            })}

        {portionCount > portionNumber &&
            <button onClick={() => {setPortionNumber(portionNumber+1)}}>NEXT</button> }
        {portionCount > portionNumber + 1 &&
            <button onClick={() => {setPortionNumber(portionCount)}}>END</button> }
    </div>
}

export default Paginator;
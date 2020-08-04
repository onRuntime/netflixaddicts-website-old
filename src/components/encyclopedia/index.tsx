import React from 'react';

export function Poster(props: any) {
    return (
        <>
            <div className="Poster">{props.sheetList}</div>
        </>
    );
}

export function SheetInfo(props: any) {
    return (
        <>
            <div className="SheetInfo">{props.sheet}</div>
        </>
    );
}
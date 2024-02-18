import React from 'react'

export const HeaderComponent = () => {
    return (
        <div>
            <header>
                <nav className={'navbar navbar-expand-md navbar-dark bg-dark'}>
                    <div><a href={'/'} className={'navbar-brand'}>Yarn Viewer | For easy viewing of your yarn stash</a></div>
                </nav>
            </header>
        </div>
    )
}

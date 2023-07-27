import React from 'react';
import './pop.css';

/*import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '../../components/ui/alert-dialog'*/

function Pop(props) {
    return (props.trigger) ? (
        /*<AlertDialog>
        <AlertDialogTrigger>Open</AlertDialogTrigger>
        <AlertDialogContent>
            <AlertDialogHeader>
            <AlertDialogTitle>{props.h4}</AlertDialogTitle>
            <AlertDialogDescription>
                {props.p}
            </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
            <AlertDialogAction>{props.text}</AlertDialogAction>
            </AlertDialogFooter>
        </AlertDialogContent>
        </AlertDialog>*/
        <div className='main'>
            <div className='sub-pop'>
                {props.children}
                <button onClick={() => props.setTrigger(false)}>{props.text}</button>
            </div>
        </div>
    ) : "";
}

export default Pop
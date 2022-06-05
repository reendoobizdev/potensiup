import * as Icons from 'react-icons/fa';

export default function FontAwesome({name, className}){
    const {...icons} = Icons;
    const TheIcon = icons[name];
    return(
        <TheIcon className={className}/>
    )
}
// import React from 'react';
import useIsInstructor from '../../Hooks/useIsInstructor';
import useAdmin from '../../Hooks/useAdmin';
import Add_A_Class from './Instructor/Add_A_Class/Add_A_Class';
import Manage_Classes from './Admin/Manage_Classes/Manage_Classes';
import My_Selected_Classes from './User/My_Selected_Classes/My_Selected_Classes';


const Default_Dashdoard = () => {
    const [isInstructor] = useIsInstructor();
    const [isAdmin] = useAdmin();
    // console.log(isInstructor);

    let content;

    if (isAdmin) {
        content = <section>
            <Manage_Classes></Manage_Classes>
        </section>;
    } else if (isInstructor) {
        content = <section>
            <Add_A_Class></Add_A_Class>
        </section>;
    } else {
        content = <section>
            <My_Selected_Classes></My_Selected_Classes>
        </section>;
    }

    return (
        <section>
            {content}
        </section>
    );
};

export default Default_Dashdoard;

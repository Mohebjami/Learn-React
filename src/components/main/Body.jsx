import PropTypes from 'prop-types';
// import CustomContainer from '../main_components/Custom_container';
import Students from '../main_components/Students';

// const names = [
//     'Alice', 'Bob', 'Charlie', 'David', 'Eve', 
//     'Frank', 'Grace', 'Hannah', 'Isaac', 'Jack'
// ];

const Body = () => {
    return (
        <div>
            {/* <h1>This is my body</h1>
            {children} */}

            <Students name={'Moheb'} lastName={'Jami'} age={'22'}/>
            <Students name={'Ahmad'} lastName={'Ahamdi'} age={'19'}/>
            <Students name={'ALi'} lastName={'foo'} age={'2'}/>
            
            {/* <ul>
                {names.map((name, index) => (
                    <CustomContainer key={index}>
                        <p key={index}>{name}</p>
                    </CustomContainer>
                    
                ))}
            </ul> */}
        </div>
    );
}

Body.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Body;
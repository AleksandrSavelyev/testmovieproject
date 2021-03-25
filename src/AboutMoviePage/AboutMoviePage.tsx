import STFlex from 'src/reactlibs/STFlex';
import CustomSpinner from 'src/reactlibs/CustomSpinner';

const AboutMoviePage = () => (
    <STFlex data-at='wrapper'>
        <CustomSpinner
            size={150}
            color='primary'
            variant='indeterminate'
            thickness={5}
            disableShrink
        />     
    </STFlex>
)

export default AboutMoviePage;
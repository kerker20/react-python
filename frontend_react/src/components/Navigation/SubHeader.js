import React from 'react'
import PageHeader from '../Navigation/PageHeader'
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';

const SubHeader = () => {
    return (
        <>
            <PageHeader title='Get In Touch with Professional Signatures' subtitle='Signatures that makes you more professional' icon={<PeopleOutlineTwoToneIcon fontSize='large'/>}/>
        </>
    )
}

export default SubHeader;
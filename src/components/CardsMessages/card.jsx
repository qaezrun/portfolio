import React from 'react';
import Card from '@mui/joy/Card'
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';

function UserMessages(){
    return(
        <Card orientation="horizontal" variant="outlined" sx={{ width: 260, backgroundColor:'#272b30' }}>
            <CardContent>
            <Typography fontWeight="md" textColor="success.plainColor">
                Yosemite Park
                </Typography>
                <Typography level="body-sm" color="primary">California, USA</Typography>
            </CardContent>
            <CardOverflow
                variant="soft"
                color="primary"
                sx={{
                px: 0.2,
                writingMode: 'vertical-rl',
                textAlign: 'center',
                fontSize: 'xs',
                fontWeight: 'xl',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                borderLeft: '1px solid',
                borderColor: 'divider',
                }}
            >
                Ticket
            </CardOverflow>
        </Card>
    )
}

export default UserMessages
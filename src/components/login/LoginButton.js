import {Facebook, Google, MailOutline} from '@mui/icons-material';

export default function LoginButton({way, icon}){

    const iconNames = ["Facebook", "Google", "MailOutline"];

    const style = {
        width: "388px",
        height: "48px",
        borderRadius: 5, 
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "#e1e4eb",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        marginBottom: 10,
    }

    const text = `Continue with ${way}`;

    return (
        <button style={style}>
            <MailOutline />
            {text}
        </button>
    )
}
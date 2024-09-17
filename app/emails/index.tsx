import { Text, Heading, Html, Hr, Head, Font } from "@react-email/components";
import * as React from "react";

interface EmailTemplateProps {
    firstName: string;
}

export default function EmailTemplate({ firstName }: EmailTemplateProps) {
	return (
		<Html>
			<Head>
				<Font
					fontFamily="Roboto"
					fallbackFontFamily="Verdana"
					webFont={{
						url: "https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2",
						format: "woff2",
					}}
					fontWeight={400}
					fontStyle="normal"
				/>
			</Head>
			<Heading as="h2">{firstName}</Heading>
			<Hr />
			<Text>Lorem ipsum</Text>
		</Html>
	);
}

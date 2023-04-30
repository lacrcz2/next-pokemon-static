import Image from "next/image";
import NextLink from 'next/link';

import { Spacer, Text, useTheme, Link } from "@nextui-org/react"

export const NavBar = () => {
    const { theme } = useTheme();


  return (
    <div style={{
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'start',
        padding: '0px 20px',
        backgroundColor: theme?.colors.blue200.value
    }}>
        <Image
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
          alt="icono de la App"
          width={70}
          height={70}
        />
        <NextLink legacyBehavior href="/" passHref>
            {/* <Link> */}
              <Text color='white' h2>Pokemon</Text>
              {/* <Text color='white' h3></Text> */}
            {/* </Link> */}
        </NextLink>

        <Spacer css={{ flex: 1 }} />
        <NextLink legacyBehavior href="/favorites" passHref>
          {/* <Link> */}
            <Text color='white' css={{ marginRight: '10px' }}>Favoritos</Text>
          {/* </Link> */}
        </NextLink>

    </div>
  )
}

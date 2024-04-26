import * as z from 'zod';

export const loginUserSchema = z.object({
  username: z.string().min(3, {
    message: 'El nombre de usuario debe de tener al menos 3 caracteres',
  }),
  password: z
    .string()
    .min(6, {
      message: 'La contraseña tiene que tener al menos 6 caracteres',
    })
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/, {
      message:
        'La contraseña debe tener al menos 6 caracteres, una mayúscula, una minúscula y un número',
    }),
});

export type LoginUserType = z.infer<typeof loginUserSchema>;

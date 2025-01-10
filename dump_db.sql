PGDMP  :    ,        
         }            clone_we_db    16.4    16.4                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    1451819    clone_we_db    DATABASE     m   CREATE DATABASE clone_we_db WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'C';
    DROP DATABASE clone_we_db;
                postgres    false            �            1259    1451820    files    TABLE        CREATE TABLE public.files (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    folder_id integer,
    size integer NOT NULL,
    type character varying(50) NOT NULL,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL
);
    DROP TABLE public.files;
       public         heap    postgres    false            �            1259    1451823    files_id_seq    SEQUENCE     �   CREATE SEQUENCE public.files_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.files_id_seq;
       public          postgres    false    215                       0    0    files_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.files_id_seq OWNED BY public.files.id;
          public          postgres    false    216            �            1259    1451824    folders    TABLE     �   CREATE TABLE public.folders (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    parent_id integer,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL
);
    DROP TABLE public.folders;
       public         heap    postgres    false            �            1259    1451827    folders_id_seq    SEQUENCE     �   CREATE SEQUENCE public.folders_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.folders_id_seq;
       public          postgres    false    217                       0    0    folders_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.folders_id_seq OWNED BY public.folders.id;
          public          postgres    false    218            x           2604    1451840    files id    DEFAULT     d   ALTER TABLE ONLY public.files ALTER COLUMN id SET DEFAULT nextval('public.files_id_seq'::regclass);
 7   ALTER TABLE public.files ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    216    215            y           2604    1451841 
   folders id    DEFAULT     h   ALTER TABLE ONLY public.folders ALTER COLUMN id SET DEFAULT nextval('public.folders_id_seq'::regclass);
 9   ALTER TABLE public.folders ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    218    217                      0    1451820    files 
   TABLE DATA           X   COPY public.files (id, name, folder_id, size, type, created_at, updated_at) FROM stdin;
    public          postgres    false    215   $                 0    1451824    folders 
   TABLE DATA           N   COPY public.folders (id, name, parent_id, created_at, updated_at) FROM stdin;
    public          postgres    false    217   �                  0    0    files_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.files_id_seq', 3, true);
          public          postgres    false    216                       0    0    folders_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.folders_id_seq', 6, true);
          public          postgres    false    218            {           2606    1451845    files files_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.files
    ADD CONSTRAINT files_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.files DROP CONSTRAINT files_pkey;
       public            postgres    false    215            }           2606    1451847    folders folders_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.folders
    ADD CONSTRAINT folders_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.folders DROP CONSTRAINT folders_pkey;
       public            postgres    false    217            ~           2606    1451854    folders folders_parent_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.folders
    ADD CONSTRAINT folders_parent_id_fkey FOREIGN KEY (parent_id) REFERENCES public.folders(id);
 H   ALTER TABLE ONLY public.folders DROP CONSTRAINT folders_parent_id_fkey;
       public          postgres    false    217    3453    217               g   x�}�1
�0��9����Fi�)\G��vQDox�ça\�Yy۷�A1\�D;I�z6�&�h��D(jX�bٝM���T0+��X<���{$���t)1         |   x���91@��9Ez4����@I�T��"!�?DS�7���	lZ��U;�g�� $e h�\B�`E7[��H��f!�_FOIa{�g�A����bD��]�'E@^��a���]y�ڕ	SJ7	�;L     